const express = require('express');
const app = express();
app.use(express.json()); // 用于解析JSON格式的请求体

app.get('/api/check-number', (req, res) => {
    const phoneNumber = req.query.phoneNumber; // 从查询参数中获取电话号码
    // 逻辑来检查电话号码是否为已知诈骗号码
    const isScam = checkPhoneNumberInDatabase(phoneNumber); // 假设这是一个检查数据库的函数
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
