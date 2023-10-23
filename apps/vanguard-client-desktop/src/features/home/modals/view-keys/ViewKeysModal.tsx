import {AiOutlineClose} from "react-icons/ai";
import {Dispatch, SetStateAction} from "react";
import {ViewKeysFlow} from "./ViewKeysFlow.tsx";

interface ViewKeysModalProps {
	setShowViewModal: Dispatch<SetStateAction<boolean>>;
	setShowContinueInBrowserModal: Dispatch<SetStateAction<boolean>>;
}

export function ViewKeysModal({setShowViewModal, setShowContinueInBrowserModal}: ViewKeysModalProps) {

	return (
			<div
				className="absolute top-0 right-0 w-[30rem] h-screen flex flex-col justify-start items-center border border-gray-200 z-20 bg-white">
				<div
					className="absolute top-0 w-full h-16 flex flex-row justify-between items-center border-b border-gray-200 text-lg font-semibold px-8">
					<span>View keys in wallet</span>
					<div className="cursor-pointer z-10" onClick={() => setShowViewModal(false)}>
						<AiOutlineClose/>
					</div>
				</div>

				<ViewKeysFlow
					setShowViewModal={setShowViewModal}
					setShowContinueInBrowserModal={setShowContinueInBrowserModal}
				/>
			</div>
	)
}