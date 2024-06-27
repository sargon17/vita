type NavigationProps = {
  children: React.ReactNode | React.ReactNode[];
};
function Navigation(props: NavigationProps) {
  return <ul className="lg:flex gap-2">{props.children}</ul>;
}

type ItemProps = {
  children: React.ReactNode;
  href: string;
};
const item = (props: ItemProps) => {
  return (
    <li className="block p-1 lg:p-2">
      <a
        href={props.href}
        className="cta-ghost font-semibold lg:font-normal"
      >
        {props.children}
      </a>
    </li>
  );
};

Navigation.Item = item;

export default Navigation;
