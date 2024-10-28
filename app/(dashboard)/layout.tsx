import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<h1 className="text-3xl">DASHBOARD</h1>
			{children}
		</div>
	);
}

export default Layout;
