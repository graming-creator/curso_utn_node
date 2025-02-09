import { Layout } from "../components/Layout"

const NotFound = () => {
    return (
        <Layout>
            <section className="section has-text-centered">
                <div className="container">
                <div className="box has-background-light p-6">
                    <h1 className="title has-text-danger">404 - Página No Encontrada</h1>
                    <p className="subtitle has-text-grey-dark">
                    Lo sentimos, la página que buscas no existe.
                    </p>
                </div>
                </div>
            </section>
        </Layout>
    )
}

export { NotFound }