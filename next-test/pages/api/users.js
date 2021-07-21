export default function handler(req,res){
    res.status(200).json([
        { name: "Thomas Jang" },
        { name: "AXBOOT" },
        { name: "시라이시 안" },
        { name: "아즈사와 코하네" },
        { name: "아오야기 토우야" },
        { name: "시노노메 아키토" },
    ])
}