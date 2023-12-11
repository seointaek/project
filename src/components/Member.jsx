export default function Member({memberName, nickName}) {
    return(
        <div className="member">
            <h2>{memberName}</h2>
            <p>{nickName}</p>
        </div>
    )
}