

/*
const User = {
    name: 'Dima',

    getName(){
        return this.name;
    },

    setName(name){
        this.name = name;
    }

}
*/

function User(name){
    let username = name;

    return {

        getName(){
            return username;    
        },

        setName(name){
            username = name;
        }

    }
}

const Dima = new User('Dima');


