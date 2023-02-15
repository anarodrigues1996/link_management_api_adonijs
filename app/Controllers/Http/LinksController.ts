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
        const createSchema = schema.create({
            title: schema.string(),
            url: schema.string(),
        })

        await request.validate({ schema: createSchema })

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

    async delete({ params })
    {
        const link = await Link.findOrFail(params.id)

        if(link != null)
        {
            await link.delete()
        }

        return link
    }

    async edit({ params, request })
    {
        const createSchema = schema.create({
            title: schema.string(),
            url: schema.string(),
        })

        await request.validate({ schema: createSchema })

        const link = await Link.findOrFail(params.id)

        link.title = request.input("title")
        link.url = request.input("url")
        await link.save()

        return link
    }

}
