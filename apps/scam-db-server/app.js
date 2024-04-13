const express = require('express');
const app = express();
app.use(express.json());

// 假设的数据库查询函数，返回一个布尔值表示是否为诈骗号码
let knownScamNumbers = ['+60123456789', '+60129876543']; // 示例号码

function checkPhoneNumberInDatabase(phoneNumber) {
    return knownScamNumbers.includes(phoneNumber);
}

app.get('/api/check-number', (req, res) => {
    const phoneNumber = req.query.phoneNumber;

    // 验证电话号码至少包含5个字符，最多包含15个字符
    if (!phoneNumber || phoneNumber.length < 5 || phoneNumber.length > 15) {
        return res.status(400).json({ message: 'Invalid phone number length.' });
    }

    const isScam = checkPhoneNumberInDatabase(phoneNumber);
    if (isScam) {
        res.json({ message: 'This number is marked as scam.' });
    } else {
        res.json({ message: 'This number is not recognized as scam.' });
    }
});

app.post('/api/report-scam', (req, res) => {
    const { scamNumber, description } = req.body;

    if (!scamNumber || scamNumber.length < 5 || scamNumber.length > 15) {
        return res.status(400).json({ message: 'Invalid phone number length.' });
    }

    // 在这里添加将诈骗号码添加到数据库的逻辑
    knownScamNumbers.push(scamNumber); // 这只是一个临时的操作，实际应用中应该持久化存储这些数据
    
    console.log(`Scam number reported: ${scamNumber}, Description: ${description}`);
    res.status(201).json({ message: 'Scam number reported successfully.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
