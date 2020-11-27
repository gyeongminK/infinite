//front에 있는 정보들이지만.. db에서 바로 쓸려고 저장

const areaCont = [
    { 
        "_id":1 ,
        "name":"서울" 
    },
    {
        "_id":2 , 
        "name":"경기" 
    },
    {
        "_id":3, 
        "name":"경북" 
    },
    {
        "_id":4, 
        "name":"경남" 
    },
    {
        "_id":5, 
        "name":"전북" 
    },
    {
        "_id":6, 
        "name":"전남" 
    },
    {
        "_id":7, 
        "name":"충남" 
    },
    {
        "_id":8, 
        "name":"충북" 
    },
    {
        "_id":9, 
        "name":"강원" 
    },
    {
        "_id":10, 
        "name":"기타" 
    },
]

const stateCont = [
    {
        "_id":1, 
        "name":"재학",
        "array": [1]
    },
    {
        "_id":2, 
        "name":"휴학" ,
        "array": [2]
    },
    {
        "_id":3, 
        "name":"수료" ,
        "array": [3]
    },
    {
        "_id":4, 
        "name":"대학원" ,
        "array": [4]
    },
]


export {
    areaCont, stateCont
}