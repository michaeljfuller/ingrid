import SpeedIcon from '@material-ui/icons/Speed';
import ApartmentIcon from '@material-ui/icons/Apartment';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import FolderOpenOutlinedIcon from '@material-ui/icons/FolderOpenOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

import {SidebarItemProps} from "./Sidebar/SidebarItem";

export default [
    { label: 'Dashboard', icon: SpeedIcon },
    { label: 'Buildings', icon: ApartmentIcon },
    { label: 'Floors', icon: FilterNoneIcon },
    { label: 'Alerts', icon: ReportProblemOutlinedIcon },
    { label: 'Files', icon: DescriptionOutlinedIcon },
    { label: 'Folders', icon: FolderOpenOutlinedIcon },
    { label: 'Users', icon: AccountCircleOutlinedIcon },
] as SidebarItemProps[];
