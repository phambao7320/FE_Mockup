import NavList from '@components/profile_user/content-profile/nav-profile/Nav-list'

const HeaderMainContent = ({label,items}:any) => {
  return (
    <>
        <h4 className='texs-semibold text-2xl ml-2 my-0'>{label}</h4>
        <NavList isCenter={true} items={items} className='ml-0'/>
        <hr/>
    </>
  )
}

export default HeaderMainContent