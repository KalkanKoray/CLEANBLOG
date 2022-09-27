const express = require('express');
const app = express();
port = 3000;
const blog = {
    id: 1,
    title: 'Blog title',
    description: 'Blog description',
};
app.listen(port, () => {
    console.log(`Sunucu ${port} port da başlatildi.`);
});
app.get('/', (req, res) => {
    res.send(blog);
});
