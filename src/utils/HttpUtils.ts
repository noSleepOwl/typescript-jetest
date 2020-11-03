export function name(): number {
    return 100;
}

export interface ServeConfig {
    schema?: 'http' | 'https';
    ip?: string;
    port?: number;
    is80Port?: boolean;
    context?: string;
}

export function genUrl(config?: ServeConfig): string {
    if (!config) {
        config = {}
    }
    config = Object.assign({
        schema: 'http',
        ip: 'localhost',
        port: 8080,
        is80Port: false,
        context: 'api'
    }, config);
    let { schema, ip, port, context, is80Port } = config
    return `${schema}://${ip}${is80Port ? '' : ':' + port}/${context}`;
}
