const MainContent = ( props: {
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
    }) => {
	return (
        <div className='pt-[65px] a_lg:ml-[300px] bg-[#f9fafb]' >
            {props.children}
        </div>
    )
};
export default MainContent ;