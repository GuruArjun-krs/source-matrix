import { DashboardIcon, AssessmentIcon, InsightsIcon, GamificationIcon, AccountIcon, AiIcon, LogoutIcon } from '../Assets/Svg'
import AccountSettings from '../Pages/Accounts&Settings'
import Gamification from '../Pages/Gamification'
import Insights from '../Pages/Insights&Report'
import Modules from '../Pages/Modules'
import AiGuide from '../Pages/AIGuide'

export const Sidebaritems = [
    {
        title: "Dashboard",
        route: "/dashboard",
        icon: <DashboardIcon color='#212121' />,
        activeIcon: <DashboardIcon color='#00126D' />
    },
    {
        title: "Modules",
        route: "/modules",
        icon: <AssessmentIcon color='#212121' />,
        activeIcon: <AssessmentIcon color='#00126D' />,
        element: <Modules />
    },
    {
        title: "Insights & Reports",
        route: "/insights&report",
        icon: <InsightsIcon color='#212121' />,
        activeIcon: <InsightsIcon color='#00126D' />,
        element: <Insights />
    },
    {
        title: 'Gamification & Growth',
        route: '/gamification',
        icon: <GamificationIcon color='#212121' />,
        activeIcon: <GamificationIcon color='#00126D' />,
        element: <Gamification />
    },
    {
        title: 'Account & Settings',
        route: 'account',
        icon: <AccountIcon color='#212121' />,
        activeIcon: <AccountIcon color='#00126D' />,
        element: <AccountSettings />
    },
    {
        title: 'AI Guiding buddy',
        route: 'aibuddy',
        icon: <AiIcon color='#212121' />,
        activeIcon: <AiIcon color='#00126D' />,
        element: <AiGuide />
    },
    {
        title: 'Logout',
        route: null,
        icon: <LogoutIcon />
    }
]