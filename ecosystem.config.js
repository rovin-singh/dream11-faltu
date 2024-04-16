module.exports = {
  apps: [
    {
      name: "myapp",
      script: "./index.js",
      instances: 2,
      exec_mode: "cluster",
      watch: true,
      increment_var: 'PORT',
      env: {
        "PORT": 8000,
        "DB_HOST": "mongodb+srv://rovin-singh:rovin.singh@cluster0.dn7izho.mongodb.net/",
        "SESSION_SECRET": "rovin-dhanush",
        "DB_NAME": "rovin-dhanush",
        "VIBGYORTEL": "d554fc34d5832a02",
        "SUREPASSTOKEN": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJmcmVzaCI6ZmFsc2UsImlhdCI6MTY2ODU4Mzg3MywianRpIjoiY2U3NWE5Y2ItNzU3Zi00MmE2LWFkNTktZThjOWVhNzkxN2FmIiwidHlwZSI6ImFjY2VzcyIsImlkZW50aXR5IjoiZGV2LmdhaW5uQHN1cmVwYXNzLmlvIiwibmJmIjoxNjY4NTgzODczLCJleHAiOjE5ODM5NDM4NzMsInVzZXJfY2xhaW1zIjp7InNjb3BlcyI6WyJ3YWxsZXQiXX19.Is_fwy305IHHjbu3JzXOTKJXd1_qA8VR7Lp1s6WhM9g"
      }
    }
  ]
}