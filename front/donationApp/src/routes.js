import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from './pages/login';
import Main from './pages/main';


// export default createAppContainer(
//     createSwitchNavigator({
//         Login,
//         Main
//     })
// )

// export default createAppContainer(

//     )
// const mainNavigation = createSwitchNavigator({
//         Login,
//         Main
//     }, {
//         navigationOptions: {
//             headerStyle: {
//                 backgroundColor: "#DA552F"
//             },
//             headerTintColor: "#FFF"
//         }
//     });

//   export default createAppContainer(mainNavigation);
export default createSwitchNavigator({
    Login,
    Main
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    }
});
