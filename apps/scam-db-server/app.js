const express = require('express');
const app = express();
app.use(express.json());

// 马来西亚电话号码验证的正则表达式
const phoneRegex = /^\+60\d{1,2}\d{6,8}$/;

// 假设的数据库查询函数，返回一个布尔值表示是否为诈骗号码
function checkPhoneNumberInDatabase(phoneNumber) {
    const knownScamNumbers = ['+60123456789', '+60129876543']; // 示例号码
    return knownScamNumbers.includes(phoneNumber);
}

// GET API端点：检查电话号码是否为诈骗号码
app.get('/api/check-number', (req, res) => {
    const phoneNumber = req.query.phoneNumber;

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

// POST API端点：报告新的诈骗电话号码
app.post('/api/report-scam', (req, res) => {
    const { scamNumber, description } = req.body;

    // 在这里添加实际的数据库添加逻辑
    console.log(`Received scam report: Number - ${scamNumber}, Description - ${description}`);
    
    // 假设添加成功，返回确认消息
    res.status(201).json({ message: 'Scam number reported successfully.' });
});

// 设置服务器监听的端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
