/** @typedef { import('express').Response } Response */
import bcrypt from 'bcrypt'

export async function validatePass(password, hash) {
  return await bcrypt.compare(password, hash)
}

export async function encryptPass(password) {
  return await bcrypt.hash(password, 8)
}

/** @param { Response } res */
export function jsonOk(res, data = null, status = 200, headers = null) {
  json('ok', res, data, status, headers)
}

/** @param { Response } res */
export function jsonError(res, data = null, status = 400, headers = null) {
  json('error', res, data, status, headers)
}

/** @param { Response } res */
function json(state, res, data, status, headers) {
  let response = {}

  if (typeof data === 'string')
    response.message = data
  else if (data === null)
    response.state = state
  else
    response = data
  
  if (state === 'error') response.state = 'error'
  
  if (headers) res.header(headers)
  res.status(status).json(response)
}

/**
 * @param {Array} arr - arrary donde se eliminara el elemento
 * @param {*} elem - elemento a eliminar
 * @returns number - indice del elemento eliminado o -1 en caso contrario
 */
export function removeItem(arr, elem) {
  const index = arr.indexOf(elem)
  if (index >= 0)
    arr.splice(index, 1)
  return index
}

/**
 * @param {Array} arr - array donde eliminar un elemento
 * @param {*} elem - elemento a eliminar
 * @returns Array - un nuevo arreglo sin el elemento
 */
export function filterItem(arr, elem) {
  return arr.filter( (item)=> item !== elem)
}

export const mergeObj = (base, extend)=> {
  const merged = {}
  for (const key in base)
    merged[key] = extend[key] ?? base[key]
  return merged
}

/** retorna el tipo del objeto en minusculas */
export const typeOf = (obj)=> Object.prototype.toString.call(obj).split(' ')[1].slice(0, -1).toLowerCase()