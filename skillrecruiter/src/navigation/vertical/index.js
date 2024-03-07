const navigation = () => {
  return [
    {
      title: 'Dashboards',
      icon: 'tabler:smart-home',
      badgeContent: 'new',
      badgeColor: 'success',
      path: '/dashboards/analytics'
    },
    {
      sectionTitle: 'Apps & Pages'
    },
    {
      title: 'Email',
      icon: 'tabler:mail',
      path: '/apps/email'
    },
    {
      title: 'Employee Chat',
      icon: 'tabler:messages',
      path: '/apps/chat'
    },
    {
      title: 'Calendar',
      icon: 'tabler:calendar',
      path: '/apps/calendar'
    },
    {
      title: 'Activity',
      icon: 'tabler:navigation-bolt',
      children: [
        {
          title: 'Company Profile',
          path: '/pages/user-profile/profile'
        },
        {
          title: 'Teams',
          path: '/pages/user-profile/teams'
        },
        {
          title: 'Projects',
          path: '/pages/user-profile/projects'
        },
        {
          title: 'Connections',
          path: '/pages/user-profile/connections'
        }
      ]
    },
    {
      sectionTitle: 'Recruiter pages'
    },
    {
      title: 'Jobs',
      icon: 'tabler:file-description',
      children: [
        {
          title: 'Add new job',
          path: '/apps/user/list'
        },
        {
          title: 'View all job',
          path: '/jobs/listedjobs/'
        }
      ]
    },
    {
      title: 'Internships',
      icon: 'tabler:recharging',
      children: [
        {
          title: 'Add new internship',
          path: '/apps/user/list'
        },
        {
          title: 'View all internships',
          path: '/internships/listedjobs/'
        }
      ]
    },
    {
      title: 'Candidates',
      icon: 'tabler:user',
      children: [
        {
          title: 'Add new Candidates',
          path: '/apps/user/list'
        },
        {
          title: 'View Shortlisted',
          path: '/apps/user/list'
        }
      ]
    },
    {
      title: 'Events',
      icon: 'tabler:ticket',
      children: [
        {
          title: 'Add new event',
          path: '/events/addnewevent/'
        },
        {
          title: 'View all events',
          path: '/events/listedevents/'
        }
      ]
    },
    {
      title: 'Blogs',
      icon: 'tabler:article',
      children: [
        {
          title: 'Add new blog',
          path: '/blogs/addnewblog/'
        },
        {
          title: 'View added blogs',
          path: '/blogs/listedblogs/'
        }
      ]
    },
    {
      sectionTitle: 'Settings'
    },
    {
      title: 'Account Settings',
      icon: 'tabler:settings',
      children: [
        {
          title: 'Account',
          path: '/pages/account-settings/account'
        },
        {
          title: 'Security',
          path: '/pages/account-settings/security'
        },
        {
          title: 'Billing',
          path: '/pages/account-settings/billing'
        },
        {
          title: 'Notifications',
          path: '/pages/account-settings/notifications'
        },
        {
          title: 'Connections',
          path: '/pages/account-settings/connections'
        }
      ]
    }
  ]
}

export default navigation
