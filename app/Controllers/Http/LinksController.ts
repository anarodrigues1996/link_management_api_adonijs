// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Link from "App/Models/Link";

export default class LinksController {

    async getAll()
    {
        return await Link.all()
    }

}
