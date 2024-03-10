"use client";

import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
	todo: string;
};

export default function TodoInput() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input {...register("todo", { required: "내용을 입력하세요" })} />
			<input type="submit" />
		</form>
	);
}
