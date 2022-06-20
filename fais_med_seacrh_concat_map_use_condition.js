// Expected Result : 
// [
"//   { name: 'Rian Nugraha', school_name: 'PLMK-JKT' },"
"//   { name: 'Ari Santoso', school_name: 'GRSR-JKT' },"
"//   { name: 'Rahman Sunggara', school_name: 'GELM-JKT' },"
// ]
// Direction :
// Return a formatted array for students of specific school using id of school.


const source = [
            {
              id: "1",
              data: {
                  first_name: "Rian",
                  last_name: "Nugraha"
              },
              school: {
                id: "1",
                data: "PLMK-JKT"
              },
            },
            {
              id: "2",
              full_name: "Ari Santoso",
              school: {
                id: "1",
                short_name: "GRSR",
                data: "JKT"
              },
            },
            {
              id: "3",
              data: {
                first_name: "Rahman",
                last_name: "Sunggara"
            },
            school: {
                id: "1",
                short_name: "GELM",
                data: "JKT"
              },
            },
            {
                id: "4",
                data: {
                    first_name: "Rian",
                    last_name: "Nugraha"
                },
                school: {
                    id: "2",
                    data: "PLMK-BDG"
                },
            },
          ]


 function result(num) {
          let res = [];
          let count = 0
          num.forEach(data => {
            count = 0
            let newObj = {}
            if(res.length === 0){
                newObj["name"] = data.data.first_name + " " + data.data.last_name
                newObj["school-name"] = data.school.data
                res.push(newObj);
            }else{
                if(data.full_name !== undefined && data.full_name !== null){
                    newObj["name"] = data.full_name
                    newObj["school_name"] = data.school.short_name + " " + data.school.data
                }else {
                    if(data.school.short_name !== undefined && data.school.short_name !== null){
                        newObj["name"] = data.data.first_name + " " + data.data.last_name
                        newObj["school_name"] = data.school.short_name + " " + data.school.data
                    }else{
                        newObj["name"] = data.data.first_name + " " + data.data.last_name
                        newObj["school_name"] = data.school.data
                     }
                }
                for(let i = 0; i < res.length ; i ++){
                    if(res[count].name !== newObj.name){
                        if(res.length - 1 === count){
                            res.push(newObj)
                            count = 0
                        
                        }else{
                            count++
                        }
                    }
                }
            }

            
            
          })
          
          return res
        }

  console.log(result(source), "Hasil test dari fais-med");




  
