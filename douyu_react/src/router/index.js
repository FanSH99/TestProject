import { Fragment } from 'react';
import { useRoutes } from 'react-router-dom';

import routes from './routes'
export default function Myrouter() {
    let element = useRoutes(routes)
    // console.log(element);
    return (
        <Fragment>
            {element}
        </Fragment>

    )
}