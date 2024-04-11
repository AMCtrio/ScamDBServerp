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
import { PhoneNumberController } from "../phoneNumber.controller";
import { PhoneNumberService } from "../phoneNumber.service";

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
  createPhoneNumber() {
    return CREATE_RESULT;
  },
  phoneNumbers: () => FIND_MANY_RESULT,
  phoneNumber: ({ where }: { where: { id: string } }) => {
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

describe("PhoneNumber", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: PhoneNumberService,
          useValue: service,
        },
      ],
      controllers: [PhoneNumberController],
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

  test("POST /phoneNumbers", async () => {
    await request(app.getHttpServer())
      .post("/phoneNumbers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastCheckedDate: CREATE_RESULT.lastCheckedDate.toISOString(),
      });
  });

  test("GET /phoneNumbers", async () => {
    await request(app.getHttpServer())
      .get("/phoneNumbers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          lastCheckedDate: FIND_MANY_RESULT[0].lastCheckedDate.toISOString(),
        },
      ]);
  });

  test("GET /phoneNumbers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/phoneNumbers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /phoneNumbers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/phoneNumbers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        lastCheckedDate: FIND_ONE_RESULT.lastCheckedDate.toISOString(),
      });
  });

  test("POST /phoneNumbers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/phoneNumbers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        lastCheckedDate: CREATE_RESULT.lastCheckedDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/phoneNumbers")
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
