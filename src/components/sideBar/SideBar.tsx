import { Navigation } from "../navigation/navigation/Navigation";
import s from './sideBar.module.scss'


const SideBar = () => {
    return (
        <div className={s.side}>
            <Navigation />
        </div>
    );
};

export { SideBar };
