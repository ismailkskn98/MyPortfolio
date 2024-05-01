//401 Unauthorized (Yetkisiz): Bu hata kodu, istemcinin kimlik doğrulaması gerektiğinde kullanılır
// 403 Forbidden (Yasaklanmış): Bu hata kodu, istemcinin istenen kaynağa erişim izni olmadığında kullanılır. Yani, istemci kimlik doğrulamasını geçmiş olabilir ancak erişmeye çalıştığı kaynağa yetkisi yoktur. 
const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    token = req.header('x-auth-token');
    if(!token) {
        // token bulunamazsa
        return res.status(401).send({ message: 'Yetkilendirme Başarısız: Token Bulunamadı.' });
    }
    try {
        // Token'ın doğrulanması
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY); // eğer token doğrulanamazsa veya doğrulanırken bir hata oluşursa, bu hatayı otomatik olarak bir Error nesnesi olarak oluşturur ve catch bloğuna girer.
        // Token doğru ise
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send({ message: 'Yetkilendirme Başarısız: Geçersiz token.' });
    }
}

module.exports = auth;