import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './header/Header';
import Content from './Content';
import { makeStyles } from '@material-ui/core/styles';
import LimitSearch from './LimitSearch';
import IconAvatars from './IconAvatars';
import DotsMobileStepper from './DotsMobileStepper';
// import TitlebarImageList from './imagelist';
const useStyles = makeStyles((theme) => ({
root: {
        background: 'rgb(70, 60, 60)',
},
}));
export default function Layout() {
    const classes = useStyles();
    return (
        <container clasNam={classes.root}>
            <CssBaseline />
            <Header />
            <br />
            <LimitSearch />
            {/* <TitlebarImageList/> */}
            <IconAvatars />
            <DotsMobileStepper />
            <Content />
        </container>  
    );
}

// import CssBaseline from '@material-ui/core/CssBaseline';
// import Header from './header/Header';
// import Content from './Content';
// import { makeStyles } from '@material-ui/core/styles';
// import LimitSearch from './LimitSearch';
// import IconAvatars from './IconAvatars';
// import DotsMobileStepper from './DotsMobileStepper';

// const useStyles = makeStyles((theme) => ({
// root: {
//         background: 'rgb(70, 60, 60)',
// },
// }));
// export default function Layout() {
//     const classes = useStyles();
//     return (
//         <container clasNam={classes.root}>
//             <CssBaseline />
//             <Header />
//             <br />
//             <LimitSearch />
//             <IconAvatars />
//             <DotsMobileStepper />
//             <Content />
//         </container>  
//     );
// }

