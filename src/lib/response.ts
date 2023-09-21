export type ResponseJson = (
    status: number,
    body?: any,
    statusText?: string,
    options?: any
) => Response

export const responseJson: ResponseJson = (status, body = {}, statusText = "", options = {}) => {
    options.status = status
    options.statusText = statusText
    if (options.headers === undefined || !options.headers) options.headers = { "Content-type": 'application/json' }
    return new Response(JSON.stringify(body), options)
}
