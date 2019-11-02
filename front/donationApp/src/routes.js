import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/login';
import Main from './pages/main';
import MyDonation from './pages/my-donation'
import Donation from './pages/donation'

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
// funciona
    export default createStackNavigator({
        Login,
        Main,
        MyDonation,
        Donation
    }, {
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#DA552F"
            },
            headerTintColor: "#FFF"
        }
    });



// sonho
// const AppNavigator = createStackNavigator({
//     Home: {
//       screen: Login,
//     },
//   });
//   export default createAppContainer(AppNavigator);