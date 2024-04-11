import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ScamNumberController } from "../scamNumber.controller";
import { ScamNumberService } from "../scamNumber.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  isScam: "true",
  lastCheckedDate: new Date(),
  phone: "examplePhone",
};
const CREATE_RESULT = {
  id: "exampleId",
  isScam: "true",
  lastCheckedDate: new Date(),
  phone: "examplePhone",
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    isScam: "true",
    lastCheckedDate: new Date(),
    phone: "examplePhone",
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  isScam: "true",
  lastCheckedDate: new Date(),
  phone: "examplePhone",
};

const service = {
  createScamNumber() {
    return CREATE_RESULT;
  },
  scamNumbers: () => FIND_MANY_RESULT,
  scamNumber: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("ScamNumber", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ScamNumberService,
          useValue: service,
        },
      ],
      controllers: [ScamNumberController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /scamNumbers", async () => {
    await request(app.getHttpServer())
      .post("/scamNumbers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastCheckedDate: CREATE_RESULT.lastCheckedDate.toISOString(),
      });
  });

  test("GET /scamNumbers", async () => {
    await request(app.getHttpServer())
      .get("/scamNumbers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          lastCheckedDate: FIND_MANY_RESULT[0].lastCheckedDate.toISOString(),
        },
      ]);
  });

  test("GET /scamNumbers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/scamNumbers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /scamNumbers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/scamNumbers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        lastCheckedDate: FIND_ONE_RESULT.lastCheckedDate.toISOString(),
      });
  });

  test("POST /scamNumbers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/scamNumbers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastCheckedDate: CREATE_RESULT.lastCheckedDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/scamNumbers")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
