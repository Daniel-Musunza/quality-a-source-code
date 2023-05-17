import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import profileView from '../views/profileView.vue'
import clientView from '../views/clientView.vue'

import AdministratorPage from '../components/core/AdministratorPage.vue'
import clientLogIn from '../components/core/clientLogIn.vue'
import clientRegister from '../components/core/clientRegister.vue'
import ForgotPassword from '../components/core/ForgotPassword.vue'
import FR2 from '../components/core/FR2.vue'
import FR3 from '../components/core/FR3.vue'
import FR4 from '../components/core/FR4.vue'
import freelancerLogIn from '../components/core/freelancerLogIn.vue'
import freelancerRegister from '../components/core/freelancerRegister.vue'
import chat from '../components/core/chat.vue'
import FAQ from '../components/core/FAQ.vue'
import orderView from '../components/core/orderView.vue'
import clientOrderView from '../components/core/clientOrderView.vue'

import clientDashboard from '../components/clientsDashboard/clientDashboard.vue'
import newOder from '../components/clientsDashboard/newOder.vue'
import allOders from '../components/clientsDashboard/allOders.vue'
import done from '../components/clientsDashboard/done.vue'
import incomplete from '../components/clientsDashboard/incomplete.vue'
import revision from '../components/clientsDashboard/revision.vue'
import reviews from '../components/clientsDashboard/reviews.vue'

import allTemplates from '../components/resume/allTemplates.vue'
import creative from '../components/resume/creative.vue'
import simple from '../components/resume/simple.vue'
import professional from '../components/resume/professional.vue'
import modern from '../components/resume/modern.vue'


import Creative from '../components/coverLetters/creative.vue'
import Simple from '../components/coverLetters/simple.vue'
import Professional from '../components/coverLetters/professional.vue'
import Modern from '../components/coverLetters/modern.vue'

import freelancerDashboard from '../components/freelancersDashboard/freelancerDashboard.vue'
import available from '../components/freelancersDashboard/available.vue'
import myBids from '../components/freelancersDashboard/myBids.vue'
import invited from '../components/freelancersDashboard/invited.vue'
import inProgress from '../components/freelancersDashboard/inProgress.vue'
import inReview from '../components/freelancersDashboard/inReview.vue'
import completed from '../components/freelancersDashboard/completed.vue'
import onRevision from '../components/freelancersDashboard/onRevision.vue'
import disputed from '../components/freelancersDashboard/disputed.vue'
import pendingPayment from '../components/freelancersDashboard/pendingPayment.vue'
import totalPaid from '../components/freelancersDashboard/totalPaid.vue'
import plagiarismChecker from '../components/freelancersDashboard/plagiarismChecker.vue'

import accounts from '../components/adminDashboard/accounts.vue'
import bids from '../components/adminDashboard/bids.vue'
import clients from '../components/adminDashboard/clients.vue'
import freelancers from '../components/adminDashboard/freelancers.vue'
import completeOrders from '../components/adminDashboard/completeOrders.vue'
import fowarded from '../components/adminDashboard/fowarded.vue'
import incompleteOrders from '../components/adminDashboard/incompleteOrders.vue'
import inreviewOrders from '../components/adminDashboard/inreviewOrders.vue'
import allOrders from '../components/adminDashboard/allOrders.vue'
import received from '../components/adminDashboard/received.vue'
import revisions from '../components/adminDashboard/revisions.vue'
import suspendedFreelancers from '../components/adminDashboard/suspendedFreelancers.vue'
import transactions from '../components/adminDashboard/transactions.vue'
import unpaidOrders from '../components/adminDashboard/unpaidOrders.vue'
import OrderBids from '../components/adminDashboard/OrderBids.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/administrator',
    name: 'administrator',
    component: AdministratorPage,
    meta: {
      title: "Administration",
      requiresAuth: false,
    }
  },
  {
    path: '/client-log-in',
    name: 'client-log-in',
    component: clientLogIn,
    meta: {
      title: "ClientLogIn",
      requiresAuth: false,
    }
  },
  {
    path: '/client-register',
    name: 'client-register',
    component: clientRegister,
    meta: {
      title: "ClientRegister",
      requiresAuth: false,
    }
  },
  {
    path: '/forgot-password',
    name: 'forgot-password',
    component: ForgotPassword,
    meta: {
      title: "Forgot Password",
      requiresAuth: false,
    }
  },
  {
    path: '/fr2',
    name: 'fr2',
    component: FR2,
    meta: {
      title: "FreelancerRegister",
      requiresAuth: false,
    }
  },
  {
    path: '/fr3',
    name: 'fr3',
    component: FR3,
    meta: {
      title: "Freelancer Register",
      requiresAuth: false,
    }
  },
  {
    path: '/fr4',
    name: 'fr4',
    component: FR4,
    meta: {
      title: "Freelancer Register",
      requiresAuth: false,
    }
  },
  {
    path: '/freelancer-log-in',
    name: 'freelancer-log-in',
    component: freelancerLogIn,
    meta: {
      title: "FreelancerLogIn",
      requiresAuth: false,
    }
  },
  {
    path: '/freelancer-register',
    name: 'freelancer-register',
    component: freelancerRegister,
    meta: {
      title: "FreelancerRegister",
      requiresAuth: false,
    }
  },
  {
    path: '/client-dashboard',
    name: 'client-dashboard',
    component: clientDashboard,
    meta: {
      title: "Client Dashboard",
      requiresAuth: false,
    }
  },
  {
    path: '/new-order',
    name: 'new-order',
    component: newOder,
    meta: {
      title: "New Order",
      requiresAuth: false,
    }
  },
  {
    path: '/client/all-orders',
    name: 'client/all-orders',
    component: allOders,
    meta: {
      title: "Orders",
      requiresAuth: false,
    }
  },
  {
    path: '/client/done',
    name: 'client/done',
    component: done,
    meta: {
      title: "Done",
      requiresAuth: false,
    }
  },
  {
    path: '/client/incomplete',
    name: 'client/incomplete',
    component: incomplete,
    meta: {
      title: "Incomplete",
      requiresAuth: false,
    }
  },
  {
    path: '/client/revision',
    name: 'client/revision',
    component: revision,
    meta: {
      title: "revision",
      requiresAuth: false,
    }
  },
  {
    path: '/client/reviews',
    name: 'client/reviews',
    component: reviews,
    meta: {
      title: "reviews",
      requiresAuth: false,
    }
  },
  {
    path: '/resume/all-templates',
    name: 'resume/all-templates',
    component: allTemplates,
    meta: {
      title: "allTemplates",
      requiresAuth: false,
    }
  },
  {
    path: '/resume/creative',
    name: 'resume/creative',
    component: creative,
    meta: {
      title: "creative",
      requiresAuth: false,
    }
  },
  {
    path: '/resume/simple',
    name: 'resume/simple',
    component: simple,
    meta: {
      title: "simple",
      requiresAuth: false,
    }
  },
  {
    path: '/resume/professional',
    name: 'resume/professional',
    component: professional,
    meta: {
      title: "professional",
      requiresAuth: false,
    }
  },
  {
    path: '/resume/modern',
    name: 'resume/modern',
    component: modern,
    meta: {
      title: "modern",
      requiresAuth: false,
    }
  },
  {
    path: '/cover-letter/creative',
    name: 'cover-letter/creative',
    component: Creative,
    meta: {
      title: "Creative",
      requiresAuth: false,
    }
  },
  {
    path: '/cover-letter/simple',
    name: 'cover-letter/simple',
    component: Simple,
    meta: {
      title: "Simple",
      requiresAuth: false,
    }
  },
  {
    path: '/cover-letter/professional',
    name: 'cover-letter/professional',
    component: Professional,
    meta: {
      title: "Professional",
      requiresAuth: false,
    }
  },
  {
    path: '/cover-letter/modern',
    name: 'cover-letter/modern',
    component: Modern,
    meta: {
      title: "Modern",
      requiresAuth: false,
    }
  },
  {
    path: '/freelancer-dashboard',
    name: 'freelancer-dashboard',
    component: freelancerDashboard,
    meta: {
      title: "Freelancer Dashboard",
      requiresAuth: false,
    }
  },
  {
    path: '/freelancer/available',
    name: 'freelancer/available',
    component: available,
    meta: {
      title: "available",
      requiresAuth: false,
    }
  },
  {
    path: '/freelancer/my-bids',
    name: 'freelancer/my-bids',
    component: myBids,
    meta: {
      title: "My Bids",
      requiresAuth: false,
    }
  },
  {
    path: '/freelancer/invited',
    name: 'freelancer/invited',
    component: invited,
    meta: {
      title: "Invited",
      requiresAuth: false,
    }
  },
  {
    path: '/freelancer/in-progress',
    name: 'freelancer/in-progress',
    component: inProgress,
    meta: {
      title: "In Progress",
      requiresAuth: false,
    }
  },
  {
    path: '/freelancer/in-review',
    name: 'freelancer/in-review',
    component: inReview,
    meta: {
      title: "In Review",
      requiresAuth: false,
    }
  },
  {
    path: '/freelancer/completed',
    name: 'freelancer/completed',
    component: completed,
    meta: {
      title: "Completed",
      requiresAuth: false,
    }
  },
  {
    path: '/freelancer/on-revision',
    name: 'freelancer/on-revision',
    component: onRevision,
    meta: {
      title: "On Revision",
      requiresAuth: false,
    }
  },
  {
    path: '/freelancer/disputed',
    name: 'freelancer/disputed',
    component: disputed,
    meta: {
      title: "Disputed",
      requiresAuth: false,
    }
  },
  {
    path: '/freelancer/pending-payment',
    name: 'freelancer/pending-payment',
    component: pendingPayment,
    meta: {
      title: "Pending Payment",
      requiresAuth: false,
    }
  },
  {
    path: '/freelancer/total-paid',
    name: 'freelancer/total-paid',
    component: totalPaid,
    meta: {
      title: "Total Paid",
      requiresAuth: false,
    }
  },
  {
    path: '/freelancer/plagiarism-checker',
    name: 'freelancer/plagiarism-checker',
    component: plagiarismChecker,
    meta: {
      title: "Plagiarism Checker",
      requiresAuth: false,
    }
  },
  {
    path: '/chat',
    name: 'chat',
    component: chat,
    meta: {
      title: "Chat",
      requiresAuth: false,
    }
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ,
    meta: {
      title: "FAQ?",
      requiresAuth: false,
    }
  },
  {
    path: '/admin/accounts',
    name: 'admin/accounts',
    component: accounts,
    meta: {
      title: "Accounts",
      requiresAuth: false,
    }
  },
  {
    path: '/admin/all-bids',
    name: 'admin/all-bids',
    component: bids,
    meta: {
      title: "All Bids",
      requiresAuth: false,
    }
  },
  {
    path: '/admin/clients',
    name: 'admin/clients',
    component: clients,
    meta: {
      title: "Clients",
      requiresAuth: false,
    }
  },
  {
    path: '/admin/freelancers',
    name: 'admin/freelancers',
    component: freelancers,
    meta: {
      title: "Freelancers",
      requiresAuth: false,
    }
  },
  {
    path: '/admin/complete-orders',
    name: 'admin/complete-orders',
    component: completeOrders,
    meta: {
      title: "Complete Orders",
      requiresAuth: false,
    }
  },
  {
    path: '/admin/fowarded',
    name: 'admin/fowarded',
    component: fowarded,
    meta: {
      title: "Orders Fowarded",
      requiresAuth: false,
    }
  },

  {
    path: '/admin/incomplete-orders',
    name: 'admin/incomplete-orders',
    component: incompleteOrders,
    meta: {
      title: "incomplete Orders",
      requiresAuth: false,
    }
  },
  {
    path: '/admin/inreview-orders',
    name: 'admin/inreview-orders',
    component: inreviewOrders,
    meta: {
      title: "in Review Orders",
      requiresAuth: false,
    }
  },
  {
    path: '/admin/received',
    name: 'admin/received',
    component: received,
    meta: {
      title: "Received",
      requiresAuth: false,
    }
  },
  {
    path: '/admin/all-orders',
    name: 'admin/all-orders',
    component: allOrders,
    meta: {
      title: "All Orders",
      requiresAuth: false,
    }
  },
  {
    path: '/admin/revisions',
    name: 'admin/revisions',
    component: revisions,
    meta: {
      title: "revisions",
      requiresAuth: false,
    }
  },
  {
    path: '/admin/suspended-freelancers',
    name: 'admin/suspended-freelancers',
    component: suspendedFreelancers,
    meta: {
      title: "Suspended Freelancers",
      requiresAuth: false,
    }
  },
  {
    path: '/admin/transactions',
    name: 'admin/transactions',
    component: transactions,
    meta: {
      title: "Transactions",
      requiresAuth: false,
    }
  },
  {
    path: '/admin/unpaid-orders',
    name: 'admin/unpaid-orders',
    component: unpaidOrders,
    meta: {
      title: "Unpaid Orders",
      requiresAuth: false,
    }
  },
  {
    path: '/order-view/:id',
    name: 'order-view',
    component: orderView,
    meta: {
      title: "Order Details",
      requiresAuth: false,
    }
  },
  {
    path: '/client-order-view/:id',
    name: 'client-order-view',
    component: clientOrderView,
    meta: {
      title: "Order Details",
      requiresAuth: false,
    }
  }, 
  {
    path: '/profile-view',
    name: 'profile-view',
    component: profileView,
    meta: {
      title: "Profile Settings",
      requiresAuth: false,
    }
  },
  {
    path: '/client-view/:id/:orderId',
    name: 'client-view',
    component: clientView,
    meta: {
      title: "client Profile",
      requiresAuth: false,
    }
  },
  {
    path: '/orders/:id/bids',
    name: 'order-bids',
    component: OrderBids,
    props: true
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
