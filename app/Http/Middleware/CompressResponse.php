<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class CompressResponse
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Illuminate\Http\Response
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);

        if ($this->shouldCompress($response)) {
            $response->header('Content-Encoding', 'gzip');
            $response->header('Vary', 'Accept-Encoding');
        }

        return $response;
    }

    /**
     * Determine if the response should be compressed.
     *
     * @param  \Illuminate\Http\Response  $response
     * @return bool
     */
    protected function shouldCompress(Response $response)
    {
        $content = $response->getContent();

        // Check if the response content is empty or already compressed
        if (empty($content) || strlen($content) < 100 || $this->isAlreadyCompressed($response)) {
            return false;
        }

        // Check if the response has a content type that can be compressed
        $contentTypes = ['text/html', 'text/plain', 'text/css', 'application/javascript', 'application/json', 'application/xml'];
        $contentType = $response->headers->get('Content-Type');

        return in_array($contentType, $contentTypes);
    }

    /**
     * Check if the response is already compressed.
     *
     * @param  \Illuminate\Http\Response  $response
     * @return bool
     */
    protected function isAlreadyCompressed(Response $response)
    {
        return stripos($response->headers->get('Content-Encoding'), 'gzip') !== false;
    }
}
