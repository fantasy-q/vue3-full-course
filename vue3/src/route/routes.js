import Home from "../pages/Home.vue";
import DCHeros from "../pages/DCHeros.vue";
import Calendar from "../pages/Calendar.vue";
// import CalendarAlter from "../pages/CalendarAlter.vue";
import Markdown from "../pages/Markdown.vue";
import Slider from "../pages/Slider.vue";
import Calculator from "../pages/Calculator.vue";
import ReusableModal from "../pages/ReusableModal.vue";
import Chat from "../pages/Chat.vue";
import UserCrud from "../pages/UserCrud.vue";

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/dc-heros', component: DCHeros, name: 'DC Heros' },
  { path: '/calendar/a', component: Calendar, name: 'Calendar' },
  // { path: '/calendarA', component: CalendarAlter, name: 'Calendar·Alter' },
  { path: '/markdown', component: Markdown, name: 'Markdown' },
  { path: '/slider', component: Slider, name: 'Slider' },
  {
    path: '/calculator', component: Calculator, name: 'Calculator', meta: { middleware: 'auth' }
  },
  { path: '/reusable-modal', component: ReusableModal, name: 'Modal' },
  {
    path: '/chat', component: Chat, name: 'Chat', meta: { middleware: 'auth' },
  },
  { path: '/usercrud', component: UserCrud, name: 'UserCrud' },
]

export default routes
