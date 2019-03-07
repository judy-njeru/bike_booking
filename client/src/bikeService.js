import axios from 'axios';

const url = 'http://localhost:3000/apis/bikes/';

class bikeService {
    //get members
    static getMembers(){ 
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(url);
                const data = res.data;
                resolve(
                    data.map(bike => ({
                        ...bike,
                        createdAt: new Date(bike.createdAt)
                    }))
                );
            }catch(err){
                reject(err);
            }
        })
    }

    // //add members
    // static addMember(name,skills, background){
    //     return axios.post(url, {
    //         name, 
    //         skills,
    //         background
    //     })
    // }

    // //delete members
    // static deleteMember(id){
    //     return axios.delete(`${url}${id}`)  
    // }

    

    //view member information
    static viewBike(bikeID){
        return new Promise(async (resolve, reject) => {
            try {
                const res = await axios.get(`${url}${bikeID}`);
                const data = res.data;
                // console.log(data)
                resolve(
                    data.map(bike => ({
                        ...bike,
                        createdAt: new Date(bike.createdAt)
                    }))
                );
            }catch(err){
                reject(err);
            }
        })  
    }
}

export default bikeService;