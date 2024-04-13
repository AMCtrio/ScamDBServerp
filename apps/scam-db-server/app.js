const express = require('express');
const app = express();
app.use(express.json());

// 这个数组模拟了一个数据库中的诈骗号码列表
const scamNumbersList = [
    '1234567890',
    '0987654321',
    // 在这里添加更多已知的诈骗号码...
];

// 一个简单的函数来检查一个号码是否在我们的诈骗号码列表中
function checkPhoneNumberInDatabase(phoneNumber) {
    return scamNumbersList.includes(phoneNumber);
}

// 处理GET请求来检查电话号码
app.get('/api/check-number', (req, res) => {
    const phoneNumber = req.query.phoneNumber;
    const isScam = checkPhoneNumberInDatabase(phoneNumber);
    if (isScam) {
        res.json({ message: 'This number is marked as scam.' });
    } else {
        res.json({ message: 'This number is not recognized as scam.' });
    }
});

// 这个POST端点允许用户报告新的诈骗号码
app.post('/api/report-scam', (req, res) => {
    const { scamNumber, description } = req.body;
    // 这里你可以添加逻辑来将这个号码添加到数据库中
    console.log(`Report received: ${scamNumber}, Description: ${description}`);
    // 现在只是简单地将其添加到数组中
    scamNumbersList.push(scamNumber);
    res.status(201).json({ message: 'Scam number reported successfully.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

