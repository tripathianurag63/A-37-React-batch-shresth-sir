import Card from "./Card";


const Parent = () =>{
    const player1 = {
        username: "rohit sharma",
        age: 38,
        team: "mi",
        jersy: 45,
        skill: "batting"
    }
    const player2 = {
        username: "virat kohli",
        age: 37,
        team: "rcb",
        jersy: 18,
        skill: "batting"
    }
    const player3 = {
        username: "dhoni",
        age: 43,
        team: "csk",
        jersy: 7,
        skill: "batting"
    }

    return <div className="parent-compo">
            <Card {...player1}/>
            <Card {...player2}/>
            <Card {...player3}/>
    </div>
}

export default Parent;