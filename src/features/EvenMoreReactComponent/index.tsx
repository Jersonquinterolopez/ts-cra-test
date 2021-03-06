import { ReactNode } from "react";

export interface HeadingProps { title: string };

export const Heading = ({ title }: HeadingProps) => {
    return (
        <h1>{title}</h1>
    )
}

export function List<ListItem>({ items, render }: {
    items: ListItem[];
    render: (item: ListItem) => ReactNode
}) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index} >
                    {render(item)}
                </li>
            ))}
        </ul>
    )
}

const TestComponent = () => {
    return (
        <>
            <Heading title="Hello" />
            <List items={["a", "b", "c"]} render={(str) => <strong>{str}</strong>} />
        </>

    )
}

export default TestComponent