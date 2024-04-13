const express = require('express');
const app = express();
app.use(express.json());

// 马来西亚电话号码的正则表达式，包括移动电话和固定电话
const phoneRegex = /^\+60(1\d{8,9}|[2-9]\d{7,8})$/;

// 临时数据库存储
let scamNumbersList = ['+60111222333', '+60149876543']; // 示例号码列表

// 用于检查电话号码的函数
function checkPhoneNumberInDatabase(phoneNumber) {
    return scamNumbersList.includes(phoneNumber);
}

// API路由：检查电话号码
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

// API路由：报告诈骗电话号码
app.post('/api/report-scam', (req, res) => {
    const { scamNumber, description } = req.body;

    if (!scamNumber || !phoneRegex.test(scamNumber)) {
        return res.status(400).json({ message: 'Invalid phone number format for Malaysia.' });
    }

    // 将新的诈骗号码添加到列表中
    scamNumbersList.push(scamNumber);

    console.log(`Scam number reported: ${scamNumber}, Description: ${description}`);
    res.status(201).json({ message: 'Scam number reported successfully.' });
});

// 设置服务器端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
