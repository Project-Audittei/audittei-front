import ReactGA from 'react-ga4';

export interface IAnalise {
    title: string;
    page: string;
}


export default function useAnalytics() {
    function enviarAnalise(analise: IAnalise) {
        return ReactGA.send({
            hitType: 'pageview',
            page: analise.page,
            title: analise.title
        })
    }

    return {
        enviarAnalise
    };
}