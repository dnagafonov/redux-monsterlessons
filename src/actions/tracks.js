var mocApiData = [
    {
        id:1,
        name:"KATAFALK"
    },
    {
        id:2,
        name:"NO FLAG"
    },
    {
        id:3,
        name:"ANTIHERO"
    },
    {
        id:4,
        name:"AFK"
    },
    {
        id:5,
        name:"ZARNI"
    }
];
export const getTracks = () => dispatch => {
    setTimeout(() => {
        console.log('i got tracks')
        dispatch({type: 'FETCH_TRACKS_SUCCESS', payload: mocApiData})
    },2000)
};