import FloatingNavBuilder from './components/FloatingNav/FloatingNavBuilder';

type Props = {
  entryId: string;
}

function AppBuilder(props: Props) {
  
  return (
    <>
      <FloatingNavBuilder {...props} />
    </>
  )
}

export default AppBuilder
