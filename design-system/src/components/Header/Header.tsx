import Image from 'next/image';

export function Header() {
  return (
    <>
      <nav className="navbar bg-body-secondary p-0" style={{height: '96px'}}>
        <div className="container">
          <a className="navbar-brand" href="#">
            <Image src="next.svg" alt="Bootstrap" width={90} height={24} />
          </a>
        </div>
      </nav>
    </>
  )
}