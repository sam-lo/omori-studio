import * as React from "react";

export default function PageNotFound() {
    return (
        <div className="flex flex-col items-center justify-center space-y-8 py-24 selection:bg-red-200">
            <div className="text-7xl font-serif text-red-900">
                Error 404
            </div>
            <div className="text-xl font-serif text-red-900">
                The page you’re looking for can’t be found.
            </div>
        </div>
    )
}