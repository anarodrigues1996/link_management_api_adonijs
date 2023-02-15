// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Link from "App/Models/Link";
import { schema } from '@ioc:Adonis/Core/Validator'

export default class LinksController {

    async getAll()
    {
        return await Link.all()
    }

    async create({ request })
    {   
        const newPostSchema = schema.create({
            title: schema.string(),
            url: schema.string(),
        })

        await request.validate({ schema: newPostSchema })

        const link = new Link()
        link.title = request.input("title")
        link.url = request.input("url")
        await link.save()

        return link
    }

    async find({ params })
    {
        return await Link.findOrFail(params.id)
    }

}
