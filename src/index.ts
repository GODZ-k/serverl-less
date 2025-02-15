export default {
	async fetch(request:Request, env:Env, ctx:ExecutionContext): Promise<Response> {
		console.log(request.body)
		console.log(request.headers)

		if(request.method === 'GET'){
			return Response.json({
				msg:"you sent a get request"
			})
		}else{
			return Response.json({
				msg:"You did not send the get request"
			})
		}

	},
} satisfies ExportedHandler<Env>;
