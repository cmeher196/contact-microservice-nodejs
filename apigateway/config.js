let config ={
    WWW_PORT: (process.env.PORT || 8080),
    users_URL:(process.env.users_URL || "http://localhost:8020/"),
    contact_URL:(process.env.contact_URL || "http://localhost:8010/")
}

module.exports= config