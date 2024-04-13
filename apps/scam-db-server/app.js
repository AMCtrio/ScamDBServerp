const express = require('express');
const app = express();
app.use(express.json());

// 更新后的正则表达式用来验证马来西亚的电话号码格式
const phoneRegex = /^\+60\d{1,2}\d{6,8}$/;

function checkPhoneNumberInDatabase(phoneNumber) {
    // 这里应该是与数据库通信的逻辑
    // 现在只是一个简单的示例，总是返回false
    return false;
}

app.get('/api/check-number', (req, res) => {
    const phoneNumber = req.query.phoneNumber;

    // 检查电话号码是否有效
    if (!phoneNumber || !phoneRegex.test(phoneNumber)) {
        return res.status(400).json({ message: 'Invalid phone number format for Malaysia.' });
    }

    const isScam = checkPhoneNumberInDatabase(phoneNumber);
    if (isScam) {
        res.json({ message: 'This number is marked as scam.' });
    } else {
        res.json({ message: 'This number is not recognized as scam.' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


