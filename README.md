<<<<<<< HEAD
# CRUD-Functions
=======

Yeni Kişi Kaydı Yapmak İçin :

[POST]
http://localhost:1907/personel/addPersonel/

{
    "identynumber": "21256242466",
    "name": "Emre ehir",
    "surname": "Komz",
    "email": "emrckokmaz@gmail.com",
    "phoneNumber": "5216210996",
    "gender": "male"
}


Var Olan Tüm Kayıtları Okumak İçin : 

[GET]
http://localhost:1907/personel/allpersonel/



Var Olan Bir Kaydı Silmek İçin :

Database veya kayıt sırasında veya tüm kaydı sorgulayarak ulaştığımız kaydın id sini
[PUT]
http://localhost:1907/personel/personel/

{
    "_id":"6663271b9097866810d2ea0c",
    "name" :"deneme"
}

Bu örnekte id si "6663271b9097866810d2ea0c" olan kayıdın name i deneme olarak değiştirilmiştir.