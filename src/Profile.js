import React from 'react'
import qs from 'qs';

//const Profile = ({ match }) => {
const Profile = (props) => {

     // props.match, props.location, props.history : router가 전달하는 데이터
    const { match, location, history } = props;
    
    //console.log(JSON.stringify(match)); // JSON Object -> String
    //console.log(JSON.stringify(location)); // JSON Object -> String

    const data = {
        johndoe: {
            name: "John Doe",
            description: "Spring based web developer"
        },
        janedoe: {
            name: "Jane Doe",
            description: "Data engineer"
        }
    };

    const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    const showDetail = query.detail === 'true';

    const { username } = match.params; // match.params.username
    const profile = data[username];

    if (!profile) {
        return <h1>{ username }은 존재하지 않는 사용자입니다.</h1>;
    }

    return (
        <div>
            <h1>{ username } ({ profile.name })</h1>
            <h2>{ showDetail ? profile.description : "공개 거부" }</h2>                        
            <hr />
            <button onClick={ (e) => history.goBack() }>뒤로 가기</button>
            <button onClick={ (e) => history.push("/home") }>홈으로 가기</button>
        </div>
    );
}

export default Profile;