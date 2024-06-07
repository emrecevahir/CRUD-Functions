const { Schema, model } = require("mongoose")
const validator = require("validator")

const PersonelSchema = new Schema({
    identynumber: {
        type: String,
        required: [true, "identy number is required"],
        minlength: [10, "Identynumber must be 11 chracters."],
        maxlength:[11,"Identynumber is too long "],
        unique: true, //veritabanına kayıt sırasında benzersiz olduğunu göstermekte
        validate: {
            validator: (identynumber)=>validator.isIdentityCard(identynumber, "any"), //en yakın lokasyona göre ıdenty number kontrolü için denedim türkiye seçenği yok
            message: "Invalid IdentyNumber"
        }
    },
    name: {
        type: String,
        required: [true, "Name  is required"],
        minlength: [3, "Name must be at least 3 characters"],
    },
    surname: {
        type: String,
        required: [true, "Surname is required"],
        minlength: [3, "Surname must be 3 chracters."],
    },
    email: {
        type: String,
        required: [true, "email is required"],
        //email yapısına uygun mu diye kontrol ettim
        validate: {
            validator: validator.isEmail,
            message: 'Email is invalid',
        }
    },
    phonenumber : {
        type: String, 
        required: [true, "Phone Number is required"],
        //telefon numarası yapısı doğru mu
        validate: {
            validator: (phoneNumber)=>validator.isMobilePhone(phoneNumber, 'tr-TR'),
            message: "Phonenumber is Invalid"
        },
        //telefon numarası kişiye özel olduğundan benzersiz mi kontrolü
        unique: true
    },
    gender : {
        type: String,
        enum:['male','famale','other'] //cinsiyet kısmında başka bir parametre gönderilmemesi için enum kullandık
    }
})

const Personel = model("Personel", PersonelSchema)
module.exports = Personel
