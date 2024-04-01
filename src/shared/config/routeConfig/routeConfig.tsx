import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { LoginPage } from 'pages/LoginPage';
import { DashBoardPage } from 'pages/DashBoardPage';
import { NotificationPage } from 'pages/NotificationsPage';
import { MonitoringPage } from 'pages/MonitoringPage';
import { TasksPage } from 'pages/TasksPage';
import { ReportsPage } from 'pages/ReportsPage';
import { GeoZonesPage } from 'pages/GeoZonesPage';
import { TracksPage } from 'pages/TracksPage';
import { DriversPage } from 'pages/DriversPage';
import { UsersPage } from 'pages/UsersPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    LOGIN = 'login',
    DASHBOARD = 'dashboard',
    MONITORING = 'monitoring',
    REPORTS = 'reports',
    TRACKS = 'tracks',
    GEOZONES = 'geozones',
    DRIVERS = 'drivers',
    TASKS = 'tasks',
    NOTIFICATIONS = 'notifications',
    USERS = 'users',
    NOT_FOUND='not_found'
}

export const AppTabs: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: 'Главная',
    [AppRoutes.DASHBOARD]: 'Дашборд',
    [AppRoutes.MONITORING]: 'Мониторинг',
    [AppRoutes.REPORTS]: 'Отчеты',
    [AppRoutes.TRACKS]: 'Треки',
    [AppRoutes.GEOZONES]: 'Геозоны',
    [AppRoutes.DRIVERS]: 'Водители',
    [AppRoutes.TASKS]: 'Задания',
    [AppRoutes.NOTIFICATIONS]: 'Уведомления',
    [AppRoutes.USERS]: 'Пользователи',
    [AppRoutes.LOGIN]: 'Логин',
    [AppRoutes.NOT_FOUND]: 'notFound',
};

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LOGIN]: '/login',
    [AppRoutes.DASHBOARD]: '/dashboard',
    [AppRoutes.MONITORING]: '/monitoring',
    [AppRoutes.REPORTS]: '/reports',
    [AppRoutes.TRACKS]: '/tracks',
    [AppRoutes.GEOZONES]: '/geozones',
    [AppRoutes.DRIVERS]: '/drivers',
    [AppRoutes.TASKS]: '/tasks',
    [AppRoutes.NOTIFICATIONS]: '/notifications',
    [AppRoutes.USERS]: '/users',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: '/',
        element: <MainPage />,
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage />,
    },
    [AppRoutes.DASHBOARD]: {
        path: RoutePath.dashboard,
        element: <DashBoardPage />,
    },
    [AppRoutes.MONITORING]: {
        path: RoutePath.monitoring,
        element: <MonitoringPage />,
    },
    [AppRoutes.TRACKS]: {
        path: RoutePath.tracks,
        element: <TracksPage />,
    },
    [AppRoutes.REPORTS]: {
        path: RoutePath.reports,
        element: <ReportsPage />,
    },
    [AppRoutes.GEOZONES]: {
        path: RoutePath.geozones,
        element: <GeoZonesPage />,
    },
    [AppRoutes.DRIVERS]: {
        path: RoutePath.drivers,
        element: <DriversPage />,
    },
    [AppRoutes.TASKS]: {
        path: RoutePath.tasks,
        element: <TasksPage />,
    },
    [AppRoutes.NOTIFICATIONS]: {
        path: RoutePath.notifications,
        element: <NotificationPage />,
    },
    [AppRoutes.USERS]: {
        path: RoutePath.users,
        element: <UsersPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
