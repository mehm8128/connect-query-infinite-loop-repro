import React, { useState, FC, useEffect, Suspense } from "react";
import styles from "../styles/Eliza.module.css";
import { useFetchEliza } from "@/clients/eliza";

interface ChatMessage {
	text: string;
	sender: "eliza" | "user";
}

const UnaryExample: FC = () => {
	const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

	const res = useFetchEliza();

	useEffect(() => {
		if (res) {
			setChatMessages((resp) => [
				...resp,
				{ text: res.sentence, sender: "eliza" },
			]);
		}
	}, [res]);

	return (
		<div>
			<h1>aaa</h1>
			<div className={styles.container}>
				{chatMessages.map((resp, i) => {
					return (
						<div
							key={i}
							className={
								resp.sender === "eliza"
									? styles.elizaRespContainer
									: styles.userRespContainer
							}
						>
							<p className={styles.respText}>{resp.text}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

const Page = () => {
  return (
		<Suspense fallback={<div>loading...</div>}>
			<UnaryExample />
		</Suspense>
	);
}
export default Page;
